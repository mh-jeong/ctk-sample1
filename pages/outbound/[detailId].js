import { useRouter } from "next/router";

const OutBoundDetailPage = () => {
  const router = useRouter();

  return <h1>outbound detail id: {router.query.detailId}</h1>;
};

export default OutBoundDetailPage;
