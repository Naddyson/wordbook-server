
import wordRoutes from './word_routes'
import listRoutes from './list_routes'
export default function (app, db) {
	wordRoutes(app,db);
	listRoutes(app,db);
}