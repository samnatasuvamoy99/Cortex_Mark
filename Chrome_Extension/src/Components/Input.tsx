type InputProps = {
  placeholder: string;
  type?:"text" | "email" | "password"|"Link";
  reference?:any;
};

export function Input({ placeholder , reference ,type }:InputProps){
        return (
          <input 
            ref={reference} 
            placeholder={placeholder} 
            type={type} 
            className="px-3 py-1.5 w-full bg-gray-50 border border-gray-300 rounded-md text-xs text-gray-900 placeholder:text-gray-400 hover:border-purple-400 focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-200 transition-all duration-150 mb-3"
          />
        );
}