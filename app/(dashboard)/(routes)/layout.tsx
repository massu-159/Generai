import Navber from "@/components/navber";
import Sidebar from "@/components/sidebar";
import { getApiLimitCount } from "@/lib/api-limit";
import { checkSubscription } from "@/lib/subscription";

const DashboardLayout = async ({ children }: { children: React.ReactNode }) => {
  const apiLimitCount = await getApiLimitCount();


  return (
    <div className='h-full relative'>
      <div className='hidden h-full md:flex md:flex-col md:fixed md:w-72 md:inset-y-0 z-[00] bg-gray-900'>
        <Sidebar apiLimitCount={apiLimitCount} />
      </div>
      <main className='md:pl-72'>
        <Navber />
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;
