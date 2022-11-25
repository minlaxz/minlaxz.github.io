const ServerQuote = (props) => {
 return <h1>{props.data}</h1>;
};

export async function getStaticProps() {
 return {
  props: {
   data: "Hello World"
  }
 }
}

export default ServerQuote;
