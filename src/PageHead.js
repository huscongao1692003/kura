import Head from "next/head";
const PageHead = ({ page }) => {
  return (
    <Head>
      <title>ThanhNguyen | {page}</title>
    </Head>
  );
};

export default PageHead;
