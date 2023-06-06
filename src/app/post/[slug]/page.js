
export default function Detail({ params }) {
    console.log(params);
    return (<div>{params.slug}</div>)
}