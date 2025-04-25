function ProductGrid({ image, name }) {
  return (
    <div style={{ border: '1px solid #ccc', padding: '1rem', width: '150px' }}>
      <img src={image} alt="product" style={{ width: '100%' }} />
      <p>{name}</p>
    </div>
  );
}
export default ProductGrid;
