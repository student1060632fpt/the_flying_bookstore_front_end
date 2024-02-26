import React from "react";
import "./Statistic.scss";
import { SlEnergy } from "react-icons/sl";
import { MdSecurity } from "react-icons/md";
import { AiOutlineLike } from "react-icons/ai";
import { GiRoundStar } from "react-icons/gi";
export default function Statistic() {
  return (
    <section id="thong-ke" className="section statistic">
      <div className="">
        <div className="section-header">
          
          <div className="section-devider">
            <div className="section-devider__stroke" />
          </div>
        </div>
        <div className="statistic-list">
          <div className="statistic-item">
            <div className="statistic-content">
              <SlEnergy className="statistic-icon" />
              <h3 className="statistic-number">Giao hàng nhanh</h3>
            </div>
          </div>

          <div className="statistic-item">
            <div className="statistic-content">
              <MdSecurity className="statistic-icon" />
              <h3 className="statistic-number">Bảo mật thanh toán</h3>
            </div>
          </div>

          <div className="statistic-item">
            <div className="statistic-content">
              <AiOutlineLike className="statistic-icon" />
              <h3 className="statistic-number">Chất lượng đỉnh nhất</h3>
            </div>
          </div>

          <div className="statistic-item">
            <div className="statistic-content">
              <GiRoundStar className="statistic-icon" />
              <h3 className="statistic-number">Chính sách rõ ràng</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
