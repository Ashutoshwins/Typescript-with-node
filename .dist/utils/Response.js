"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const SendResponse = (res, data = { message: "Invalid Request" }, status = 400) => {
    res.status(status).json({ data });
};
exports.default = SendResponse;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmVzcG9uc2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvdXRpbHMvUmVzcG9uc2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQSxNQUFNLFlBQVksR0FBRyxDQUFDLEdBQWEsRUFBRSxPQUFZLEVBQUUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLEVBQUUsTUFBTSxHQUFHLEdBQUcsRUFBRSxFQUFFO0lBQzdGLEdBQUcsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztBQUN0QyxDQUFDLENBQUM7QUFDRixrQkFBZSxZQUFZLENBQUMifQ==