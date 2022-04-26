import { useRouter } from "next/router";

const LocationDetailPage = () => {
  const router = useRouter();

  return <h1>location detail id: {router.query.detailId}</h1>;
};

export default LocationDetailPage;
