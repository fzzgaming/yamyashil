import "./ConfirmModal.scss"
function ConfirmModal({ onCancel, onConfirm }) {
    return (
        <div className="modal-backdrop">
            <div className="todo-modal">
                <h1>Diqqat!</h1>
                <p>Agar siz chiqish tugmasini bossangiz siz Admin Paneldan chqib ketasiz...</p>
                <div className="todo-footer">
                    <button className="cancel-btn" onClick={onCancel}>
                        Bekor qilish
                    </button>
                    <button className="ok-btn" onClick={onConfirm}>
                        Chiqish
                    </button>
                </div>
            </div>
        </div>
    )
}
export default ConfirmModal