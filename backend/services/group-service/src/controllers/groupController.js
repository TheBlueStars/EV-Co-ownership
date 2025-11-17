import Group from "../models/Group.js"

// [POST] /api/groups
export const createGroup = async (req, res) => {
  try {
    const { name, fundBalance } = req.body
    const group = await Group.create({ name, fundBalance })
    return res.status(201).json(group)
  } catch (error) {
    console.error("Lỗi khi tạo group:", error)
    return res.status(500).json({ message: "Lỗi hệ thống" })
  }
}

// [GET] /api/groups
export const getGroups = async (req, res) => {
  try {
    const groups = await Group.find()
    return res.status(200).json(groups)
  } catch (error) {
    console.error("Lỗi khi lấy danh sách group:", error)
    return res.status(500).json({ message: "Lỗi hệ thống" })
  }
}

// [GET] /api/groups/:id
export const getGroupById = async (req, res) => {
  try {
    const group = await Group.findById(req.params.id)
    if (!group) return res.status(404).json({ message: "Không tìm thấy group" })
    return res.status(200).json(group)
  } catch (error) {
    console.error("Lỗi khi lấy group theo ID:", error)
    return res.status(500).json({ message: "Lỗi hệ thống" })
  }
}

// [PUT] /api/groups/:id
export const updateGroup = async (req, res) => {
  try {
    const updated = await Group.findByIdAndUpdate(req.params.id, req.body, { new: true })
    if (!updated) return res.status(404).json({ message: "Không tìm thấy group" })
    return res.status(200).json(updated)
  } catch (error) {
    console.error("Lỗi khi cập nhật group:", error)
    return res.status(500).json({ message: "Lỗi hệ thống" })
  }
}

// [DELETE] /api/groups/:id
export const deleteGroup = async (req, res) => {
  try {
    const deleted = await Group.findByIdAndDelete(req.params.id)
    if (!deleted) return res.status(404).json({ message: "Không tìm thấy group" })
    return res.status(204).send()
  } catch (error) {
    console.error("Lỗi khi xóa group:", error)
    return res.status(500).json({ message: "Lỗi hệ thống" })
  }
}
