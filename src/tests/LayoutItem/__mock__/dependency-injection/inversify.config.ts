import "reflect-metadata";
import {Container} from "inversify";
import {TYPES} from "../../../../core/types";
import LayoutItemMockRepository from "../repository/LayoutItemMockRepository";
import LayoutItemCreator from "../../../../core/LayoutItem/Application/LayoutItemCreator";

const container = new Container()
container.bind<LayoutItemCreator>(TYPES.LAYOUT_ITEM_CREATOR).to(LayoutItemCreator);
container.bind<LayoutItemMockRepository>(TYPES.LAYOUT_ITEM_REPOSITORY).to(LayoutItemMockRepository);

export {container}