import { auth } from "@clerk/nextjs";

import prismadb from "@/lib/prismadb";
import { MAX_FREE_COUNTS } from "@/constants";

// APIの回数上限を増やす
export const incrementApiLimit = async () => {
  const { userId } = auth();

  if (!userId) {
    return;
  }

  // ユーザーのAPI制限を取得
  const userApiLimit = await prismadb.userApiLimit.findUnique({
    where: { userId: userId },
  });

  // ユーザーのAPI制限が存在する場合
  if (userApiLimit) {
    await prismadb.userApiLimit.update({
      where: { userId: userId },
      data: { count: userApiLimit.count + 1 },
    });
  } else {
    // ユーザーのAPI制限が存在しない場合
    await prismadb.userApiLimit.create({
      data: { userId: userId, count: 1 },
    });
  }
};

// API制限をチェックする
export const checkApiLimit = async () => {
  const { userId } = auth();

  if (!userId) {
    return false;
  }

  const userApiLimit = await prismadb.userApiLimit.findUnique({
    where: { userId: userId },
  });

  if (!userApiLimit || userApiLimit.count < MAX_FREE_COUNTS) {
    return true;
  } else {
    return false;
  }
};

// API制限のカウントを取得する
export const getApiLimitCount = async () => {
  const { userId } = auth();

  if (!userId) {
    return 0;
  }

  const userApiLimit = await prismadb.userApiLimit.findUnique({
    where: {
      userId,
    },
  });

  if (!userApiLimit) {
    return 0;
  }

  return userApiLimit.count;
};
