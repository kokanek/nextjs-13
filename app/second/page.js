import '../../styles/globals.css'
import Link from 'next/link'

async function getData() {
  const index = Math.floor(Math.random()*10)
  const res = await fetch(`https://dog-facts-api.herokuapp.com/api/v1/resources/dogs?index=${index}`);
  return res.json();
}

export default async function Page() {
  const data = await getData();
  return (
    <p>
      {data[0].fact}
    </p>
  );
}