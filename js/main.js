// const allSeats = document.querySelectorAll('.seat');

// for(let i = 0; i < allSeats.length; i++){
//     const singleSeat = allSeats[i];
    
    
//     let newCount = 0;
//     singleSeat.addEventListener('click', function(){
//         // const seatCountIncrement = document.getElementById("seat-count-increment").innerText;
//         // const seatCountDecrement = document.getElementById("seat-count-decrement").innerText;

//         // singleSeat.classList.add('bg-base');
//         // singleSeat.classList.add('hover:bg-[#1dd100]');
//         // singleSeat.classList.add('text-white');
//         newCount = newCount + 1;
//         console.log(newCount);
//         console.log("clicked")
        
//     // console.log(singleSeat);
    
        

    
    
    
//     // const seatName = singleSeat.innerText;

//     // const seatDetails = document.getElementById('seat-details');

//     // const div = document.createElement("div");
    
//     // const selectedSeat = document.createElement("p");
//     // selectedSeat.innerText = seatName;
    
//     // const selectedSeatClass = document.createElement("p");
//     // selectedSeatClass.innerText = "Economy";
    
//     // const selectedSeatPrice = document.createElement("p");
//     // selectedSeatPrice.innerText = 550;
    
//     // div.appendChild(selectedSeat);
//     // div.appendChild(selectedSeatClass);
//     // div.appendChild(selectedSeatPrice);
//     // div.classList.add('flex');
//     // div.classList.add('justify-between');
//     // div.classList.add('py-3');
    
//     // seatDetails.appendChild(div);
    
    


     

    
// });

// }

// const allSeats = document.getElementsByClassName('seat');
// for(const singleSeat of allSeats){
//     let newCountInc = 0;
//     singleSeat.addEventListener("click", function() {
//         const seatCountIncrement = document.getElementById("seat-count-increment");
//         newCountInc++;
//         seatCountIncrement.innerText = newCountInc;
//         console.log(seatCountIncrement);
//     });
// }
let totalSeat = [];


//increment seat count
const seatCountIncrement = document.getElementById("seat-count-increment");
const seatCountIncrementTxt = seatCountIncrement.innerText;
let  newCountInc = parseInt(seatCountIncrementTxt);
//decrement seat count
const seatCountDecrement = document.getElementById("seat-count-decrement");
const seatCountDecrementTxt = seatCountDecrement.innerText;
let newCountDec = parseInt(seatCountDecrementTxt);

const totalPriceElement = document.getElementById("total-price");
const price = totalPriceElement.innerText;
let totalPrice = parseInt(price);

const grandTotalElement = document.getElementById("grand-total");

// const nextBtn = document.getElementById("next-btn");

// const phoneNum = document.getElementById("phone-number");
// const phoneNumber = phoneNum.value; 



function getId(element){
    if(!totalSeat.includes(element)){
        if(totalSeat.length < 4){
            newCountInc = newCountInc + 1;
            newCountDec = newCountDec - 1;
            seatCountIncrement.innerText = newCountInc;
            seatCountDecrement.innerText = newCountDec;
            //button color added when select
            const singleSeat = document.getElementById(element);
            singleSeat.classList.add('bg-base');
            singleSeat.classList.add('hover:bg-[#1dd100]');
            singleSeat.classList.add('text-white');
            totalSeat.push(element);
            //add new element on the price list
            const seatName = singleSeat.innerText;
            const seatDetails = document.getElementById('seat-details');
            const div = document.createElement("div");
            const selectedSeat = document.createElement("p");
            selectedSeat.innerText = seatName;
            const selectedSeatClass = document.createElement("p");
            selectedSeatClass.innerText = "Economy";       
            const selectedSeatPrice = document.createElement("p");
            selectedSeatPrice.innerText = "550";
            div.appendChild(selectedSeat);
            div.appendChild(selectedSeatClass);
            div.appendChild(selectedSeatPrice);
            div.classList.add('flex');
            div.classList.add('justify-between');
            div.classList.add('py-3');
            seatDetails.appendChild(div);
            //total selected ticket price
            const seatPrice = selectedSeatPrice.innerText;
            const ticketPrice = parseInt(seatPrice);
            totalPrice = totalPrice + ticketPrice;
            totalPriceElement.innerText = totalPrice;
        
            grandTotalElement.innerText = totalPrice;
            
            if(totalSeat.length === 4){
                const applyBtn = document.getElementById("apply-coupon-btn");
                applyBtn.removeAttribute("disabled");
            }
            
            // if(totalSeat.length === 1){
            //     nextBtn.removeAttribute("disabled");
            // }
        
        


        }else{
            alert("You can not select more than 4 seats");
        }
        
    }else{
        alert("You already selected this button");
    }
    
    


    

    
    

    
}

document.getElementById("apply-coupon-btn").addEventListener("click", function() {
    const newCoupon = document.getElementById("coupon-name").value;
    if(newCoupon === "NEW15"){
        const totalPrice = parseInt(totalPriceElement.innerText);
        const newPriceAfterCoupon = totalPrice * 15 / 100;
        const discountP = document.createElement("p");
        discountP.innerText = "BDT " + newPriceAfterCoupon;
        
        const discText = document.getElementById("discount-price");
        discText.appendChild(discountP);
        discText.classList.remove("hidden");
        discText.classList.add("flex");
        discText.classList.add("justify-between");
        document.getElementById("coupon-input").classList.add("hidden");
        
        let grandTotal = parseInt(grandTotalElement.innerText); 
        grandTotal = totalPrice - newPriceAfterCoupon;
        grandTotalElement.innerText = grandTotal;

        // discText.classList.remove("hidden");
    }else if(newCoupon === "Couple 200"){
        const totalPrice = parseInt(totalPriceElement.innerText);
        const newPriceAfterCoupon = totalPrice * 20 / 100;
        const discountP = document.createElement("p");
        discountP.innerText = "BDT " + newPriceAfterCoupon;
        
        const discText = document.getElementById("discount-price");
        discText.appendChild(discountP);
        discText.classList.remove("hidden");
        discText.classList.add("flex");
        discText.classList.add("justify-between");
        document.getElementById("coupon-input").classList.add("hidden");

        let grandTotal = parseInt(grandTotalElement.innerText); 
        grandTotal = totalPrice - newPriceAfterCoupon;
        grandTotalElement.innerText = grandTotal;
        
    }else{
        alert("wrong coupon name");
    }
});

// nextBtn.addEventListener("click", function(){

//     // if(totalSeat === 1 && phoneNum.value === "String"){
//     //     nextBtn.removeAttribute("disabled")
//     // }
    
// });
document.getElementById("phone-number").addEventListener("input", function(){
    const phoneNum = document.getElementById("phone-number")
    const phoneNumber = phoneNum.value;
    const nextBtn = document.getElementById("next-btn");
    if(totalSeat.length >= 1 && typeof phoneNumber == "string"){
        nextBtn.removeAttribute("disabled");
    }
    
    
    
});
    
// function applyCoupon(){
//     const newCoupon = document.getElementById("coupon-name").value;
//     if(newCoupon === "NEW15"){
        
//     }else{
//         alert("wrong coupon name");
//     }
// }