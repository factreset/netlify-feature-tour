exports.handler = async () => {
  return {
    statusCode: 200,
    body: `hello world! The truth is... ${process.env.MY_SECRET}`,
  };
};
