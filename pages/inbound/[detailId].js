import { useRouter } from "next/router";

const InBoundDetailPage = () => {
  const router = useRouter();

  return <h1>inbound detail id: {router.query.detailId}</h1>;
};

export default InBoundDetailPage;
