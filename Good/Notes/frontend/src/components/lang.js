import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from "react-i18next";



const LangButton = () => {
  const { t, i18n } = useTranslation();
  const switchLanguage = () => {
    if (i18n.language === "en") {
      i18n.changeLanguage("ru")
    } else {
      i18n.changeLanguage("en")
    }
  }
  return (
    <div>
      <Link className="nav-link text-warning" onClick={switchLanguage}>
        <span> {t("Switch to RU")}
        </span></Link>
    </div>
  )
}



const MyNotes = () => {
  const { t } = useTranslation();
  return (
    <div>
      {t("MyNotes")}
    </div>
  )
}
const AllNotes = () => {
  const { t } = useTranslation();
  return (
    <div>
      {t("AllNotes")}
    </div>
  )
}

const AddNote = () => {
  const { t } = useTranslation();
  return (
    <div>
      {t("AddNote")}
    </div>
  )
}
const Read = () => {
  const { t } = useTranslation();
  return (
    <div>
      {t("Read")}
    </div>
  )
}

const Delete = () => {
  const { t } = useTranslation();
  return (
    <div>
      {t("Delete")}
    </div>
  )
}

const Edit = () => {
  const { t } = useTranslation();
  return (
    <div>
      {t("Edit")}
    </div>
  )
}

const CreateNote = () => {
  const { t } = useTranslation();
  return (
    <div>
      {t("Create Note")}
    </div>
  )
}

const SaveNote = () => {
  const { t } = useTranslation();
  return (
    <div>
      {t("Save Note")}
    </div>
  )
}

const Back = () => {
  const { t } = useTranslation();
  return (
    <div>
      {t("Back")}
    </div>
  )
}


export {
  LangButton,
  MyNotes,
  AllNotes,
  AddNote,
  Read,
  Delete,
  Edit,
  CreateNote,
  SaveNote,
  Back

}