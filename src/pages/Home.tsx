import PageHeader from "../components/PageHeader";
import RepositoryTable from "../components/RepositoryTable";
import SearchField from "../components/SearchField";

const Home = () => {
  return (
    <div>
      <PageHeader pageTitle="Repository" />
      <SearchField />
      <RepositoryTable />
    </div>
  );
};

export default Home;
