export default function Select({ label, trigger, value, onChange, options }) {
  return (
    <Dropdown label={label} value={value} onChange={onChange}>
      <Dropdown.Trigger as={trigger} />
      <Dropdown.Menu>
        {options.map((option) => (
          <Dropdown.Item>{option}</Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
}

// export default function PressButton(props) {
//   const longPressProps = useLongPress();

//   return <Button {...longPressProps} {...props} />;
// }
