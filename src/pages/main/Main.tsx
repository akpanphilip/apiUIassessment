/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import Layout from "../../components/Layout/Layout";
import Card from "../../components/UI/Card";
import UploadImage from "../../components/UploadImage/UploadImage";
import Form from "../../components/UI/Form";
import AdditionalQuestions from "../../components/UI/AdditionalQuestions";
import FormProfile from "../../components/UI/FormProfile";

type Props = {};

const Main = () => {
  return (
    <Layout>
      <Card title="Upload cover image">
        <UploadImage />
      </Card>
      <Card title="Personal Information">
        <Form />
      </Card>
      <Card title="Profile">
        <FormProfile />
      </Card>
      <Card title="Additional questions">
        <AdditionalQuestions />
      </Card>
    </Layout>
  );
};

export default Main;
