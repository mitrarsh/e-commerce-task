

type CartItemProps = {
  id: number;
  image: string;
  title: string;
  price: number;
  rate: number;
  count: number;
};

const CartItem = (item:CartItemProps) => {
  return (
    <div className='h-fit'>
        <img src={item.image} alt="dsfs" className="w-[2rem]" />
        
    </div>
  )
}

export default CartItem