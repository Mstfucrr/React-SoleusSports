import { useState } from "react";

import Layout from "@/layout/Layout";

import Header from "@/components/header"
import Contact from "@/components/contact"

const index = () => {
  return (
    <Layout>
      <Header />
      <Contact />
    </Layout>
  )
}

export default index