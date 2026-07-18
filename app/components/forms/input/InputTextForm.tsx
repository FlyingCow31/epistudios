import { Props } from "@/app/components/forms/input/props"

export function InputTextForm({ label, type, name, placeholder, required }: Props) {
     const classInput = "bg-seclight border-sec border rounded-sm p-1 outline-none lg:w-[100%]"
     return (
          <label className={"flex flex-col items-center lg:w-[90%]"} htmlFor={`${name}`}>
               <span className={"titleform"}>{label}</span>
               <input
                    id={`${name}`}
                    type={`${type}`}
                    name={`${name}`}
                    placeholder={placeholder}
                    required={required}
                    className={`${classInput}`}
               />
          </label>
     )
}
