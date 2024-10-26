import { IoMdCheckboxOutline } from "react-icons/io";
import { BiCommentError } from "react-icons/bi";
import { MdPermDeviceInformation } from "react-icons/md";
import { IoIosWarning } from "react-icons/io";

interface AlertNotifProps {
  type: "error" | "success" | "warning" | "info";
  title?: string;
  text: string;
  className?: string;
}

const AlertNotif: React.FC<AlertNotifProps> = ({
  type,
  title,
  text,
  className,
}) => {

  const colors = {
    error: { background: "#160b0b", textColor: "#f4c7c7" },
    success: { background: "#0c130d", textColor: "#cce8cd" },
    warning: { background: "#191207", textColor: "#ffe2b7" },
    info: { background: "#071318", textColor: "#b8e7fb" },
  };

  const { background, textColor } = colors[type];

  const icon =
    type === "error" ? (
      <BiCommentError className="text-xl" style={{ color: "#f44336" }} />
    ) : type === "success" ? (
      <IoMdCheckboxOutline className="text-xl" style={{ color: "#66bb6a" }} />
    ) : type === "warning" ? (
      <IoIosWarning className="text-xl" style={{ color: "#ffa726" }} />
    ) : (
      <MdPermDeviceInformation className="text-xl" style={{ color: "#29b6f6" }} />
    );

  return (
    <div
      className={`rounded-[4px] shadow-none text-sm leading-3 tracking-[0.01071em] flex items-center gap-3 px-[6px] py-[16px] ${className}`}
      style={{ color: textColor, backgroundColor: background }}
    >
      {icon}
      {title ? (
        <div className="flex flex-col">
          <p className="font-bold text-lg">{title}</p>
          <p>{text}</p>
        </div>
      ) : (
        <p>{text}</p>
      )}
    </div>
  );
};

export default AlertNotif;