import { useEffect, useState } from "react";

import Layout from "@/layout/Layout";

import Header from "@/components/header"
import Contact from "@/components/contact"
import Gallery from "@/components/Gallery";
import Navs from '@/components/navbar';
import { SelectedPage } from "@/components/navbar/types";

const index = () => {
  const [selectedPageState, setSelectedPageState] = useState<SelectedPage>(SelectedPage.header);
  
  return (
    <Layout>
      <Navs selectedPageState={selectedPageState} setSelectedPageState={setSelectedPageState} />
      <Header setSelectedPageState={setSelectedPageState} />
      <Gallery setSelectedPageState={setSelectedPageState} />
      <Contact setSelectedPageState={setSelectedPageState} />
    </Layout>
  )
}

export default index