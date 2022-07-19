import { check, edit, turn } from '../../../store/boardSlice';
import "./Cell.css";
import { useDispatch } from 'react-redux'

/**
 * Hiện tại, các components "Cell" nếu sử dụng useContext sẽ khiến devtools gây ra lỗi lúc runtime,
 * cụ thể là k inpect được các "Cell" này, do đó quá trình phát hiện gây ra tốn thời gian --> timeout
 * Giải pháp : Tạo Redux store, cung cấp state cho các component "Board" và "Cell"
 */

function Cell({ x, y, value }) {
    const dispatch = useDispatch();

    const toggleCell = (e) => {
        if (value === -1) { // havent clicked
            dispatch(edit({ x: x, y: y })) // click --> thay đổi nội dung của ô, đống thời update ngay state
            dispatch(check({ x: x, y: y })) // check winner
            dispatch(turn())
        }
    }

    return (
        <div className="grid-item" onClick={toggleCell}>
            {
                value === -1 ? "" : (value === 0 ? "O" : "X")
            }
        </div>
    )
}

export default Cell;