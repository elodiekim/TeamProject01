import React from 'react'
import Header from '../../Main/MainHeader';
import { MyPageNav } from '../../Mypage/MypageNav';
// import { CartHeader } from '../../Cart/CartHeader'
// import { CartList } from '../../Cart/CartList'
// import { TotalCart } from '../../Cart/TotalCart'
import { CartTable } from '../../Cart/CartTable';
import {CartButtons} from '../../Cart/CartButtons';

function CartPage() {
  return (
    <>
      <Header/>
      <MyPageNav />
      <CartTable/>
      <CartButtons/>
      
    </>
  )
}

export default CartPage;

// 2번방법(실패)
// const Cart = () => {
//   const [cart, setCart] = useState([]);
//   const [total, setTotal] = useState(0);
//   const [checkLists, setCheckLists] = useState([]);
//   const isAllChecked =
//     cart.length === checkLists.length && checkLists.length !== 0;

//   const found = checkLists.map((checkList) =>
//     cart.filter((el) => el.id === parseInt(checkList))
//   );

//   const handleQuantity = (type, id, quantity) => {
//     const found = cart.filter((el) => el.id === id)[0];
//     const idx = cart.indexOf(found);

//     if (type === "plus") {
//       const cartItem = {
//         id: found.id,
//         image: found.image,
//         name: found.name,
//         quantity: quantity,
//         price: found.price,
//         provider: found.provider,
//       };
//       setCart([...cart.slice(0, idx), cartItem, ...cart.slice(idx + 1)]);
//     } else {
//       if (quantity === 0) return;
//       const cartItem = {
//         id: found.id,
//         image: found.image,
//         name: found.name,
//         quantity: quantity,
//         price: found.price,
//         provider: found.provider,
//       };
//       setCart([...cart.slice(0, idx), cartItem, ...cart.slice(idx + 1)]);
//     }
//   };

  // const handleRemove = (id) => {
  //   setCart(cart.filter((cart) => cart.id !== id));
  //   setCheckLists(checkLists.filter((check) => parseInt(check) !== id));
  // };

//   const handleCheckList = (checked, id) => {
//     if (checked) {
//       setCheckLists([...checkLists, id]);
//     } else {
//       setCheckLists(checkLists.filter((check) => check !== id));
//     }
//   };

//   const handleCheckAll = (checked) => {
//     if (checked) {
//       const checkItems = [];
//       cart.map((cart) => checkItems.push(`${cart.id}`));
//       setCheckLists(checkItems);
//     } else {
//       setCheckLists([]);
//     }
//   };

//   return (
//     <>
//       <Header/>
//       <MyPageNav />
//       <CartHeader isAllChecked={isAllChecked} handleCheckAll={handleCheckAll} />



//       {cart.length !== 0 ? (
//         cart.map((cart) => {
//           return (
//             <CartList
//               key={`key-${cart.id}`}
//               cart={cart}
//               setCart={setCart}
//               handleQuantity={handleQuantity}
//               handleRemove={handleRemove}
//               handleCheckList={handleCheckList}
//               checkLists={checkLists}
//             />
//           );
//         })
//       ) : (
//         <div>
//           <h2>장바구니에 담긴 상품이 없습니다.</h2>
//         </div>
//       )}

      
      
//       {cart.length !== 0 ? (
//         <TotalCart
//           cart={cart}
//           total={total}
//           setTotal={setTotal}
//           found={found}
//         />
//       ) : (
//         ""
//       )}
//     </>
//   );
// };

// export default Cart;