import { selector, useRecoilValue } from "recoil";

const myQuery = selector({
  key: "MyDBQuery",
  get: async () => {
    // const response = await fetch(getMyRequestUrl());
    // return response.json();
  },
});

function QueryResults() {
  const queryResults = useRecoilValue(myQuery);

  return <div>{queryResults.foo}</div>;
}

export default function ResultsSection() {
  return (
    // <React.Suspense fallback={<div>Loading...</div>}>
    <QueryResults />
    // </React.Suspense>
  );
}
