import "../../../styles/marquee.css"

export default function OfferBar() {
  return (
    <div className="offer-bar">
      <div className="offer-track">
        <span>⚡ BUY 1 GET 1 FREE ⚡</span>
        <span>🎁 BUY 2 GET 3 FREE 🎁</span>
        <span>🚚 Free Gift on Prepaid Orders 🚚</span>

        {/* duplicate for seamless loop */}
        <span>⚡ BUY 1 GET 1 FREE ⚡</span>
        <span>🎁 BUY 2 GET 3 FREE 🎁</span>
        <span>🚚 Free Gift on Prepaid Orders 🚚</span>
        <span>⚡ BUY 1 GET 1 FREE ⚡</span>
        <span>🎁 BUY 2 GET 3 FREE 🎁</span>
        <span>🚚 Free Gift on Prepaid Orders 🚚</span>
        <span>⚡ BUY 1 GET 1 FREE ⚡</span>
        <span>🎁 BUY 2 GET 3 FREE 🎁</span>
        <span>🚚 Free Gift on Prepaid Orders 🚚</span>
      </div>
    </div>
  );
}
