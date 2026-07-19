export default async function productDetails({
    params,
}:{params:Promise<{productId:string}>}) {
    return (
    <div>product no {(await params).productId} </div>
    )
}