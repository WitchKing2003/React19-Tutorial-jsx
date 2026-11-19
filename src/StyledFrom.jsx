export const StyledFrom = () => {
    return(
        <form class="contact-from">
            <label htmlFor="">Username:</label>
            <input type="text" id="username" class="form-inout" />
            <br />
            <label htmlFor="">Email:</label>
            <input type="text" id="email" class="form-inout" tabIndex="1" />
        </form>
    )
}
