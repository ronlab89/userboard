import { useToggleStore } from "@/store/toogle.store";
import type { TooltipProps } from "@/types/tooltip";

const Tooltip = ({ content, id, top, left }: TooltipProps) => {
  const tooltip = useToggleStore((state) => state.tooltip);
  return (
    <div
      id={tooltip?.id}
      role="tooltip"
      className={`absolute ${top} ${left} z-[1000] ${
        tooltip.status && tooltip.id === id
          ? "visible opacity-100"
          : "invisible opacity-0"
      } inline-block px-4 py-2 text-xs font-medium text-userboard-textdark transition-opacity duration-300 bg-userboard-bgdark rounded-lg shadow-xs dark:bg-userboard-bglight dark:text-userboard-textlight`}
    >
      {content}
      <div className="tooltip-arrow" data-popper-arrow></div>
    </div>
  );
};

export default Tooltip;
