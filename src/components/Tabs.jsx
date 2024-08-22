export default function Tabs({children, buttons, buttonsContainer = "menu"}) {
    const ButtonsContainer = buttonsContainer; // this is necessary because otherwise it would look for a built-in element 'buttonsContainer'
    return (
        <>
            <ButtonsContainer>{buttons}</ButtonsContainer>
            {children}
        </>
    );
}