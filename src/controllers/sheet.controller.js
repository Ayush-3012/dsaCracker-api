import Sheet from "../models/sheet.model.js";

export const getAllSheets = async (req, res) => {
  try {
    const sheets = await Sheet.find();
    // console.log(sheets);
    return res.status(200).json({ sheets });
  } catch (error) {
    return res.status(500).json({ message: "Error fetching sheets", error });
  }
};

export const getSpecificSheet = async (req, res) => {
  try {
    const foundSheet = await Sheet.findById(req.params.sheetId);

    if (!foundSheet)
      return res.status(404).json({ message: "Sheet not found" });

    return res.status(200).json({ foundSheet });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Error fetching specific sheet", error });
  }
};
