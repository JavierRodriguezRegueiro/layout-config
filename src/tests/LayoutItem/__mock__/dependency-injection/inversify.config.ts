import "reflect-metadata";
import {Container} from "inversify";
import {TYPES} from "../../../../core/types";
import LayoutItemMockRepository from "../repository/LayoutItemMockRepository";
import LayoutItemCreator from "../../../../core/LayoutItem/Application/LayoutItemCreator";
import LayoutItemsFinder from "../../../../core/LayoutItem/Application/LayoutItemsFinder";

const container = new Container()
container.bind<LayoutItemCreator>(TYPES.LAYOUT_ITEM_CREATOR).to(LayoutItemCreator);
container.bind<LayoutItemMockRepository>(TYPES.LAYOUT_ITEM_REPOSITORY).to(LayoutItemMockRepository);
container.bind<LayoutItemsFinder>(TYPES.LAYOUT_ITEMS_FINDER).to(LayoutItemsFinder)

export {container}