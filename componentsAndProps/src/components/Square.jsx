/* eslint-disable react/prop-types */
import close from "../assets/close.png"
import circle from "../assets/circle.png"

function Square(props) {
    const {bgColor, children} = props //Destructring Properties
    return (
         <div className={`w-48 h-48 ${bgColor} flex justify-center items-center cursor-pointer`}>{children}</div>
    );//${} -> use this to call props variable like bgColor or Children
};

function GreenSquare() {
    return <Square  bgColor={`bg-lime-600`}>
        <img src={close} className="w-28" alt="" />
    </Square>;
    //{close} to call what is your import(close)
}

function CreamSquare() {
    return <Square bgColor="bg-lime-100">
        <img src={circle} className="w-28" alt="" />
    </Square>;
}

function Line1(){
    return (
        <>
            <GreenSquare></GreenSquare>
            <CreamSquare></CreamSquare>
            <GreenSquare></GreenSquare>
        </>
    )
}

function Line2(){
    return (
        <>
            <CreamSquare></CreamSquare>
            <GreenSquare></GreenSquare>
            <CreamSquare></CreamSquare>
        </>
    )
}

export {Line1, Line2};
//This Case how to export more than one component
