import react from "react";

function Dropdown() {
    return (
        <>
            <div class="btn-group">
                <button type="button" class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                    Location
                </button>
                <ul class="dropdown-menu">
                    {/* <li><a class="dropdown-item" href="#">Jorhati</a></li>
                    <li><a class="dropdown-item" href="#">Guwahati</a></li> */}
                    <li><a class="dropdown-item" href="/chenimari">Chenimari (Khowang)</a></li>
                </ul>
            </div>
        </>
    );
}

export default Dropdown;