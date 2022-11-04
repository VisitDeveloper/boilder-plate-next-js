import MainLayout from "./../src/components/layout/index";
import { LAYOUT_TYPE } from "./../src/types/layout-type";
import { useSelector } from "react-redux";
import { FormattedMessage, useIntl } from "react-intl";

const Home = () => {
  const token = useSelector((state) => state.token);
  console.log(token);
  const intl = useIntl();

  const title = intl.formatMessage({ id: "page.home.head.title" });

  return (
    <>
      <div>{title}</div>
      <p>
        <FormattedMessage id="page.home.description" />
      </p>
    </>
  );
};

Home.getLayout = (page) => {
  return (
    <MainLayout
      title={"home page"}
      description={"description page"}
      type={LAYOUT_TYPE.ALL}
    >
      {page}
    </MainLayout>
  );
};

export default Home;
