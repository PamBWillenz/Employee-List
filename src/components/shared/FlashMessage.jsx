import React, { useState, useEffect } from "react";

const FlashMessage = ({ success, objectClass, action }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (success) {
      setVisible(true);
      const timer = setTimeout(() => {
        setVisible(false);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [success]);

  return (
    <>
      {visible && (
        <div className="alert alert-success" role="alert">
          <strong>
            {objectClass} {action} successfully!
          </strong>
        </div>
      )}
    </>
  );
};
export default FlashMessage;
