import { Box, Modal } from "@mui/material";
import React, { useEffect, useState } from "react";
import { boxStyle, handleModalChildren } from "./helper";
import { IconModalType } from "./index.interface";
import { ContactsType } from "@/types";
import { DocumentData, QuerySnapshot, onSnapshot } from "firebase/firestore";
import { getSnapshotDoc, usersCollection } from "@/lib/firebase/userController";

type props = {
  icon: JSX.Element;
  title: string;
  modalType: IconModalType;
};

const AppModel: React.FC<props> = ({ icon, title, modalType }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  // fetch user in real time from firestore
  const [contacts, setContacts] = useState<ContactsType[]>([]);

  useEffect(
    () =>
      onSnapshot(usersCollection, (snapshot: QuerySnapshot<DocumentData>) => {
        setContacts(snapshot.docs.map((doc) => getSnapshotDoc(doc)));
      }),
    []
  );

  return (
    <div>
      <div onClick={handleOpen}>
        {icon}
        <Modal open={open} onClose={handleClose}>
          <Box sx={boxStyle}>
            <h1 className="text-xl font-bold">{title}</h1>
            {handleModalChildren(modalType, contacts, handleClose)}
          </Box>
        </Modal>
      </div>
    </div>
  );
};

export default AppModel;
