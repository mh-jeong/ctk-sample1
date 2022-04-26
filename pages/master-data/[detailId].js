import { useRouter } from "next/router";

const MasterDataDetailPage = () => {
  const router = useRouter();

  return <h1>master-data detail id: {router.query.detailId}</h1>;
};

export default MasterDataDetailPage;
