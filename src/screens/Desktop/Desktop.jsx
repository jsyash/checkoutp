import React from "react";
import "./style.css";

export const Desktop = () => {
  return (
    <div className="desktop">
      <div className="div">
        <div className="rectangle" />
        <div className="text-wrapper">Checkout</div>
        <div className="text-wrapper-2">Address</div>
        <div className="text-wrapper-3">Payment</div>
        <div className="text-wrapper-4">Address</div>
        <div className="text-wrapper-5">Contact</div>
        <p className="p">Add your address for your CSD Delivery</p>
        <p className="text-wrapper-6">Information provided here will be used to contact you for delivery updates.</p>
        <div className="group">
          <div className="rectangle-2" />
          <div className="text-wrapper-7">House Number/Road Name/Area/Colony</div>
        </div>
        <div className="group-2">
          <div className="group-3">
            <div className="rectangle-3" />
            <div className="text-wrapper-8">City</div>
          </div>
          <div className="group-4">
            <div className="rectangle-3" />
            <div className="text-wrapper-8">State</div>
          </div>
        </div>
        <div className="group-5">
          <div className="rectangle-4" />
          <div className="text-wrapper-8">Pincode</div>
        </div>
        <div className="group-6">
          <div className="rectangle-4" />
          <div className="text-wrapper-8">Name</div>
        </div>
        <div className="group-7">
          <div className="rectangle-4" />
          <div className="text-wrapper-8">Phone Number</div>
        </div>
        <div className="frame">
          <div className="text-wrapper-9">Add address</div>
        </div>
        <div className="overlap-group">
          <img
            className="line"
            alt="Line"
            src="https://generation-sessions.s3.amazonaws.com/5f10c3f59d015a5630b0151f40d94b19/img/line-2.svg"
          />
          <img
            className="img"
            alt="Line"
            src="https://generation-sessions.s3.amazonaws.com/5f10c3f59d015a5630b0151f40d94b19/img/line-2.svg"
          />
          <div className="tick-mark">
            <div className="vector-wrapper">
              <img
                className="vector"
                alt="Vector"
                src="https://generation-sessions.s3.amazonaws.com/5f10c3f59d015a5630b0151f40d94b19/img/vector-2.svg"
              />
            </div>
          </div>
          <div className="tick-mark-wrapper">
            <div className="img-wrapper">
              <img
                className="vector"
                alt="Vector"
                src="https://generation-sessions.s3.amazonaws.com/5f10c3f59d015a5630b0151f40d94b19/img/vector-2.svg"
              />
            </div>
          </div>
          <div className="div-wrapper">
            <div className="img-wrapper">
              <img
                className="vector"
                alt="Vector"
                src="https://generation-sessions.s3.amazonaws.com/5f10c3f59d015a5630b0151f40d94b19/img/vector-2.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
