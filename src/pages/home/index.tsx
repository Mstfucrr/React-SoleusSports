import { useState } from "react";

import Layout from "@/layout/Layout";

import Header from "@/components/header"
import Contact from "@/components/contact"
import Gallery from "@/components/Gallery";

const index = () => {
  return (
    <Layout>
      <Header />
      <Gallery />
      <Contact />
    </Layout>
  )
}

export default index