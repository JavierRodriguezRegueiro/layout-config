import {Container} from "inversify";
import {TYPES} from "../../../core/types";
import "reflect-metadata";
import UserCase from "../../../core/Shared/Domain/UserCase/UserCase";
import LayoutItemRepository from "../../../core/LayoutItem/Domain/LayoutItemRepository";
import LocalStorageLayoutItemRepository from "../../../core/LayoutItem/Infrastructure/LocalStorageLayoutItemRepository";
import LayoutItemCreator from "../../../core/LayoutItem/Application/LayoutItemCreator";
import LayoutItemsFinder from "../../../core/LayoutItem/Application/LayoutItemsFinder";

const container = new Container()
container.bind<UserCase>(TYPES.LAYOUT_ITEM_CREATOR).to(LayoutItemCreator);
container.bind<LayoutItemRepository>(TYPES.LAYOUT_ITEM_REPOSITORY).to(LocalStorageLayoutItemRepository);
container.bind<LayoutItemsFinder>(TYPES.LAYOUT_ITEMS_FINDER).to(LayoutItemsFinder)

export {container}