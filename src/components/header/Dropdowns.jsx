// import Arrow from "../../assets/arrow.png";
import "./Header.css";

const Dropdowns = () => {
  return (
    <div className="dropdown_complete">
      <div className="dropdown_complete_first">
        <div className="drop_item_heading">
          <h2 className="flex flex-row items-center gap-[5px] text-[18px]">
            News{" "}
            <svg
              data-v-9493e270=""
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              alt="arrow"
              className="arrow_of_item text-fg-default rotate-270 group-hover:rotate-90 group-hover:text-fg-inverted transition text-uiMWeak"
            >
              <path
                data-v-9493e270=""
                d="M9.08 3.61a.2.2 0 01.284 0l.777.779a.2.2 0 010 .283L6.944 7.868a.2.2 0 000 .283l3.196 3.197a.2.2 0 010 .283l-.777.778a.2.2 0 01-.283 0L4.822 8.15a.2.2 0 010-.283l4.259-4.257z"
                fill="currentColor"
              ></path>
            </svg>{" "}
          </h2>
        </div>

        <div className="dropdown_menus">
          <ul>
            <li>CRYPTO CURRENCIES</li>
            <li>NFT NEWS</li>
            <li>AI NEWS</li>
            <li>META VERSE</li>
            <li>Policy and Regulations</li>
          </ul>
        </div>
      </div>

      <div className="dropdown_complete_first">
        <div className="drop_item_heading">
          <h2 className="flex flex-row items-center gap-[5px] text-[18px]">
            Categories
            <svg
              data-v-9493e270=""
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              alt="arrow"
              className="arrow_of_item text-fg-default rotate-270 group-hover:rotate-90 group-hover:text-fg-inverted transition text-uiMWeak"
            >
              <path
                data-v-9493e270=""
                d="M9.08 3.61a.2.2 0 01.284 0l.777.779a.2.2 0 010 .283L6.944 7.868a.2.2 0 000 .283l3.196 3.197a.2.2 0 010 .283l-.777.778a.2.2 0 01-.283 0L4.822 8.15a.2.2 0 010-.283l4.259-4.257z"
                fill="currentColor"
              ></path>
            </svg>{" "}
          </h2>
        </div>

        <div className="dropdown_menus">
          <ul>
            <li>DEFI</li>
            <li>STABLE COINS</li>
            <li>MEMES</li>
            <li>CHAINS</li>
            <li>RWA (Real world assets)</li>
            <li>DEFIN</li>
            <li>GAMEFI</li>
            <li>LAYER TOKENS</li>
          </ul>
        </div>
      </div>

      <div className="dropdown_complete_first">
        <div className="drop_item_heading">
          <h2 className="flex flex-row items-center gap-[5px] text-[18px]">
            Tools
            <svg
              data-v-9493e270=""
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              alt="arrow"
              className="arrow_of_item text-fg-default rotate-270 group-hover:rotate-90 group-hover:text-fg-inverted transition text-uiMWeak"
            >
              <path
                data-v-9493e270=""
                d="M9.08 3.61a.2.2 0 01.284 0l.777.779a.2.2 0 010 .283L6.944 7.868a.2.2 0 000 .283l3.196 3.197a.2.2 0 010 .283l-.777.778a.2.2 0 01-.283 0L4.822 8.15a.2.2 0 010-.283l4.259-4.257z"
                fill="currentColor"
              ></path>
            </svg>{" "}
          </h2>
        </div>

        <div className="dropdown_menus">
          <ul>
            <li>FEAR & GREED INDEX</li>
            <li>RAMBO CHART</li>
          </ul>
        </div>
      </div>

      <div className="dropdown_complete_first">
        <div className="drop_item_heading">
          <h2 className="flex flex-row items-center gap-[5px] text-[18px]">
            Articles
          </h2>
        </div>

        {/* <div className="dropdown_menus">
          <ul>
            <li>Bitcoin</li>
            <li>Blockchain</li>
            <li>AI</li>
            <li>Adoption</li>
            <li>Ethereum</li>
            <li>Business</li>
            <li>NFTs</li>
            <li>Altcoins</li>
            <li>Policy and Regulations</li>
            <li>Defi</li>
          </ul>
        </div> */}
      </div>

      <div className="dropdown_complete_first">
        <div className="drop_item_heading">
          <h2 className="flex flex-row items-center gap-[5px] text-[18px]">
            Submit
            {/* <svg
              data-v-9493e270=""
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              alt="arrow"
              className="arrow_of_item text-fg-default rotate-270 group-hover:rotate-90 group-hover:text-fg-inverted transition text-uiMWeak"
            >
              <path
                data-v-9493e270=""
                d="M9.08 3.61a.2.2 0 01.284 0l.777.779a.2.2 0 010 .283L6.944 7.868a.2.2 0 000 .283l3.196 3.197a.2.2 0 010 .283l-.777.778a.2.2 0 01-.283 0L4.822 8.15a.2.2 0 010-.283l4.259-4.257z"
                fill="currentColor"
              ></path>
            </svg>{" "} */}
          </h2>
        </div>

        {/* <div className="dropdown_menus">
          <ul>
            <li>Top 100 2023</li>
            <li>Top 100 2022</li>
            <li>Top 100 2021</li>
            <li>Top 100 2020</li>
            <li>Opinion</li>
            <li>Expert Take</li>
            <li>Interviews</li>
          </ul>
        </div> */}
      </div>
    </div>
  );
};

export default Dropdowns;
