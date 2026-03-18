import { CalcButton } from "./Buttons"
export function GridLayout({ handleClick, handleEqual, isDarkMode })
{
    return <>
        <div className="grid grid-cols-4 gap-3">
                  {["7", "8", "9", "/"].map((b) => (
                    <CalcButton key={b} label={b === "/" ? "÷" : b} onClick={() => handleClick(b)} isDarkMode={isDarkMode} type={isNaN(b) ? "operator" : "number"} />
                  ))}
                  {["4", "5", "6", "*"].map((b) => (
                    <CalcButton key={b} label={b === "*" ? "×" : b} onClick={() => handleClick(b)} isDarkMode={isDarkMode} type={isNaN(b) ? "operator" : "number"} />
                  ))}
                  {["1", "2", "3", "-"].map((b) => (
                    <CalcButton key={b} label={b} onClick={() => handleClick(b)} isDarkMode={isDarkMode} type={isNaN(b) ? "operator" : "number"} />
                  ))}
                  {["0", ".", "=", "+"].map((b) => (
                    <CalcButton 
                        key={b} 
                        label={b} 
                        onClick={b === "=" ? handleEqual : () => handleClick(b)} 
                        isDarkMode={isDarkMode} 
                        type={b === "=" ? "action" : (isNaN(b) && b !== "." ? "operator" : "number")} 
                    />
                  ))}
                </div>
    
    </>
}