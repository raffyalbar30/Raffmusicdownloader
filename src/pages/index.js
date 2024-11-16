import Head from "next/head";
import DashboardLayouts from "@/layouts/Menu/getLayouts";


 Home.getLayout = (page) => <DashboardLayouts> { page } </DashboardLayouts>

export default function Home() {
  return (
      <>
         <Head>
            <title> Youtube Downloader</title>
         </Head>
      </>
  );
}
