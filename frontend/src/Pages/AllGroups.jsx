import { GroupsTable, Logo, SectionTitle } from "../Components";

const AllGroups = () => {
  return (
    <>
      <SectionTitle text="Social Media Database System -- GROUPS" />
      <section className="flex mt-20 ml-32 align-element">
        <Logo />
        <GroupsTable />
      </section>
    </>
  );
};
export default AllGroups;
