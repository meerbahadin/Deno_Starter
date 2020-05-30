const helloworld = ({
  request,
  response,
}: {
  request: any;
  response: any;
}) => {
  response.body = {
    msg : 'Deno JSON API Starter'
  }
};
export { helloworld };
