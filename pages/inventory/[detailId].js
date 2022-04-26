import { useRouter } from "next/router";

const InventoryDetailPage = () => {
  const router = useRouter();

  return <h1>inventory detail id: {router.query.detailId}</h1>;
};

export default InventoryDetailPage;
