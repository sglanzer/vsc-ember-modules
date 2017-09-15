import { CompletionItem, CompletionItemKind, CompletionItemProvider, ExtensionContext, Position, Range, TextDocument, TextEdit, languages } from 'vscode'

class EmberModuleCompletionItem extends CompletionItem {
  constructor(label: string, text: string, { cursorLine, cursorPosition }) {
    super(label)
    this.textEdit = TextEdit.replace(new Range(cursorLine, 0, cursorLine, cursorPosition), text)
    this.kind = CompletionItemKind.Module
  }
}

class EmberModuleCompletionItemProvider implements CompletionItemProvider {
  public provideCompletionItems(document: TextDocument, position: Position): Thenable<CompletionItem[]> {
    const state: any = {
      cursorPosition: position.character,
      cursorLine: position.line
    }

    // Mapping pulled from https://github.com/ember-cli/ember-rfc176-data#new-modules-to-globals
    return Promise.resolve([
      new EmberModuleCompletionItem("@$", "import $ from 'jquery'", state),
      new EmberModuleCompletionItem("@A", "import { A } from '@ember/array'", state),
      new EmberModuleCompletionItem("@Application", "import Application from '@ember/application'", state),
      new EmberModuleCompletionItem("@ApplicationInstance", "import ApplicationInstance from '@ember/application/instance'", state),
      new EmberModuleCompletionItem("@Array", "import EmberArray from '@ember/array'", state),
      new EmberModuleCompletionItem("@ArrayProxy", "import ArrayProxy from '@ember/array/proxy'", state),
      new EmberModuleCompletionItem("@AutoLocation", "import AutoLocation from '@ember/routing/auto-location'", state),
      new EmberModuleCompletionItem("@Checkbox", "import Checkbox from '@ember/component/checkbox'", state),
      new EmberModuleCompletionItem("@Component", "import Component from '@ember/component'", state),
      new EmberModuleCompletionItem("@ComputedProperty", "import ComputedProperty from '@ember/object/computed'", state),
      new EmberModuleCompletionItem("@ContainerDebugAdapter", "import ContainerDebugAdapter from '@ember/debug/container-debug-adapter'", state),
      new EmberModuleCompletionItem("@Controller", "import Controller from '@ember/controller'", state),
      new EmberModuleCompletionItem("@CoreObject", "import CoreObject from '@ember/object/core'", state),
      new EmberModuleCompletionItem("@DataAdapter", "import DataAdapter from '@ember/debug/data-adapter'", state),
      new EmberModuleCompletionItem("@Debug.registerDeprecationHandler", "import { registerDeprecationHandler } from '@ember/debug'", state),
      new EmberModuleCompletionItem("@Debug.registerWarnHandler", "import { registerWarnHandler } from '@ember/debug'", state),
      new EmberModuleCompletionItem("@DefaultResolver", "import GlobalsResolver from '@ember/application/globals-resolver'", state),
      new EmberModuleCompletionItem("@Engine", "import Engine from '@ember/engine'", state),
      new EmberModuleCompletionItem("@EngineInstance", "import EngineInstance from '@ember/engine/instance'", state),
      new EmberModuleCompletionItem("@Enumerable", "import Enumerable from '@ember/enumerable'", state),
      new EmberModuleCompletionItem("@Error", "import EmberError from '@ember/error'", state),
      new EmberModuleCompletionItem("@Evented", "import Evented from '@ember/object/evented'", state),
      new EmberModuleCompletionItem("@HashLocation", "import HashLocation from '@ember/routing/hash-location'", state),
      new EmberModuleCompletionItem("@Helper", "import Helper from '@ember/component/helper'", state),
      new EmberModuleCompletionItem("@Helper.helper", "import { helper } from '@ember/component/helper'", state),
      new EmberModuleCompletionItem("@HistoryLocation", "import HistoryLocation from '@ember/routing/history-location'", state),
      new EmberModuleCompletionItem("@LinkComponent", "import LinkComponent from '@ember/routing/link-component'", state),
      new EmberModuleCompletionItem("@Location", "import Location from '@ember/routing/location'", state),
      new EmberModuleCompletionItem("@Map", "import EmberMap from '@ember/map'", state),
      new EmberModuleCompletionItem("@MapWithDefault", "import MapWithDefault from '@ember/map/with-default'", state),
      new EmberModuleCompletionItem("@Mixin", "import Mixin from '@ember/object/mixin'", state),
      new EmberModuleCompletionItem("@MutableArray", "import MutableArray from '@ember/array/mutable'", state),
      new EmberModuleCompletionItem("@NoneLocation", "import NoneLocation from '@ember/routing/none-location'", state),
      new EmberModuleCompletionItem("@Object", "import EmberObject from '@ember/object'", state),
      new EmberModuleCompletionItem("@ObjectProxy", "import ObjectProxy from '@ember/object/proxy'", state),
      new EmberModuleCompletionItem("@Observable", "import Observable from '@ember/object/observable'", state),
      new EmberModuleCompletionItem("@PromiseProxyMixin", "import PromiseProxyMixin from '@ember/object/promise-proxy-mixin'", state),

      new EmberModuleCompletionItem("@RSVP", "import RSVP from 'rsvp'", state),
      new EmberModuleCompletionItem("@RSVP.Promise", "import { Promise } from 'rsvp'", state),
      new EmberModuleCompletionItem("@RSVP.all", "import { all } from 'rsvp'", state),
      new EmberModuleCompletionItem("@RSVP.allSettled", "import { allSettled } from 'rsvp'", state),
      new EmberModuleCompletionItem("@RSVP.defer", "import { defer } from 'rsvp'", state),
      new EmberModuleCompletionItem("@RSVP.denodeify", "import { denodeify } from 'rsvp'", state),
      new EmberModuleCompletionItem("@RSVP.filter", "import { filter } from 'rsvp'", state),
      new EmberModuleCompletionItem("@RSVP.hash", "import { hash } from 'rsvp'", state),
      new EmberModuleCompletionItem("@RSVP.hashSettled", "import { hashSettled } from 'rsvp'", state),
      new EmberModuleCompletionItem("@RSVP.map", "import { map } from 'rsvp'", state),
      new EmberModuleCompletionItem("@RSVP.off", "import { off } from 'rsvp'", state),
      new EmberModuleCompletionItem("@RSVP.on", "import { on } from 'rsvp'", state),
      new EmberModuleCompletionItem("@RSVP.race", "import { race } from 'rsvp'", state),
      new EmberModuleCompletionItem("@RSVP.reject", "import { reject } from 'rsvp'", state),
      new EmberModuleCompletionItem("@RSVP.resolve", "import { resolve } from 'rsvp'", state),

      new EmberModuleCompletionItem("@Resolver", "import Resolver from '@ember/application/resolver'", state),
      new EmberModuleCompletionItem("@Route", "import Route from '@ember/routing/route'", state),
      new EmberModuleCompletionItem("@Router", "import EmberRouter from '@ember/routing/router'", state),
      new EmberModuleCompletionItem("@Service", "import Service from '@ember/service'", state),

      new EmberModuleCompletionItem("@String.camelize", "import { camelize } from '@ember/string'", state),
      new EmberModuleCompletionItem("@String.capitalize", "import { capitalize } from '@ember/string'", state),
      new EmberModuleCompletionItem("@String.classify", "import { classify } from '@ember/string'", state),
      new EmberModuleCompletionItem("@String.dasherize", "import { dasherize } from '@ember/string'", state),
      new EmberModuleCompletionItem("@String.decamelize", "import { decamelize } from '@ember/string'", state),
      new EmberModuleCompletionItem("@String.fmt", "import { fmt } from '@ember/string'", state),
      new EmberModuleCompletionItem("@String.htmlSafe", "import { htmlSafe } from '@ember/string'", state),
      new EmberModuleCompletionItem("@String.isHTMLSafe", "import { isHTMLSafe } from '@ember/string'", state),
      new EmberModuleCompletionItem("@String.loc", "import { loc } from '@ember/string'", state),
      new EmberModuleCompletionItem("@String.underscore", "import { underscore } from '@ember/string'", state),
      new EmberModuleCompletionItem("@String.w", "import { w } from '@ember/string''", state),

      new EmberModuleCompletionItem("@Test.Adapter", "import TestAdapter from '@ember/test/adapter'", state),
      new EmberModuleCompletionItem("@Test.registerAsyncHelper", "import { registerAsyncHelper } from '@ember/test'", state),
      new EmberModuleCompletionItem("@Test.registerHelper", "import { registerHelper } from '@ember/test'", state),
      new EmberModuleCompletionItem("@Test.registerWaiter", "import { registerWaiter } from '@ember/test'", state),
      new EmberModuleCompletionItem("@Test.unregisterHelper", "import { unregisterHelper } from '@ember/test'", state),
      new EmberModuleCompletionItem("@Test.unregisterWaiter", "import { unregisterWaiter } from '@ember/test'", state),

      new EmberModuleCompletionItem("@TextArea", "import TextArea from '@ember/component/text-area'", state),
      new EmberModuleCompletionItem("@TextField", "import TextField from '@ember/component/text-field'", state),
      new EmberModuleCompletionItem("@addListener", "import { addListener } from '@ember/object/events'", state),
      new EmberModuleCompletionItem("@addObserver", "import { addObserver } from '@ember/object/observers'", state),
      new EmberModuleCompletionItem("@aliasMethod", "import { aliasMethod } from '@ember/object'", state),
      new EmberModuleCompletionItem("@assert", "import { assert } from '@ember/debug'", state),
      new EmberModuleCompletionItem("@assign", "import { assign } from '@ember/polyfills'", state),
      new EmberModuleCompletionItem("@cacheFor", "import { cacheFor } from '@ember/object/internals'", state),
      new EmberModuleCompletionItem("@compare", "import { compare } from '@ember/utils'", state),

      new EmberModuleCompletionItem("@computed", "import { computed } from '@ember/object'", state),
      new EmberModuleCompletionItem("@computed.alias", "import { alias } from '@ember/object/computed'", state),
      new EmberModuleCompletionItem("@computed.and", "import { and } from '@ember/object/computed'", state),
      new EmberModuleCompletionItem("@computed.bool", "import { bool } from '@ember/object/computed'", state),
      new EmberModuleCompletionItem("@computed.collect", "import { collect } from '@ember/object/computed'", state),
      new EmberModuleCompletionItem("@computed.deprecatingAlias", "import { deprecatingAlias } from '@ember/object/computed'", state),
      new EmberModuleCompletionItem("@computed.empty", "import { empty } from '@ember/object/computed'", state),
      new EmberModuleCompletionItem("@computed.equal", "import { equal } from '@ember/object/computed'", state),
      new EmberModuleCompletionItem("@computed.filter", "import { filter } from '@ember/object/computed'", state),
      new EmberModuleCompletionItem("@computed.filterBy", "import { filterBy } from '@ember/object/computed'", state),
      new EmberModuleCompletionItem("@computed.filterProperty", "import { filterProperty } from '@ember/object/computed'", state),
      new EmberModuleCompletionItem("@computed.gt", "import { gt } from '@ember/object/computed'", state),
      new EmberModuleCompletionItem("@computed.gte", "import { gte } from '@ember/object/computed'", state),
      new EmberModuleCompletionItem("@computed.intersect", "import { intersect } from '@ember/object/computed'", state),
      new EmberModuleCompletionItem("@computed.lt", "import { lt } from '@ember/object/computed'", state),
      new EmberModuleCompletionItem("@computed.lte", "import { lte } from '@ember/object/computed'", state),
      new EmberModuleCompletionItem("@computed.map", "import { map } from '@ember/object/computed'", state),
      new EmberModuleCompletionItem("@computed.mapBy", "import { mapBy } from '@ember/object/computed'", state),
      new EmberModuleCompletionItem("@computed.mapProperty", "import { mapProperty } from '@ember/object/computed'", state),
      new EmberModuleCompletionItem("@computed.match", "import { match } from '@ember/object/computed'", state),
      new EmberModuleCompletionItem("@computed.max", "import { max } from '@ember/object/computed'", state),
      new EmberModuleCompletionItem("@computed.min", "import { min } from '@ember/object/computed'", state),
      new EmberModuleCompletionItem("@computed.none", "import { none } from '@ember/object/computed'", state),
      new EmberModuleCompletionItem("@computed.not", "import { not } from '@ember/object/computed'", state),
      new EmberModuleCompletionItem("@computed.notEmpty", "import { notEmpty } from '@ember/object/computed'", state),
      new EmberModuleCompletionItem("@computed.oneWay", "import { oneWay } from '@ember/object/computed'", state),
      new EmberModuleCompletionItem("@computed.or", "import { or } from '@ember/object/computed'", state),
      new EmberModuleCompletionItem("@computed.readOnly", "import { readOnly } from '@ember/object/computed'", state),
      new EmberModuleCompletionItem("@computed.reads", "import { reads } from '@ember/object/computed'", state),
      new EmberModuleCompletionItem("@computed.setDiff", "import { setDiff } from '@ember/object/computed'", state),
      new EmberModuleCompletionItem("@computed.sort", "import { sort } from '@ember/object/computed'", state),
      new EmberModuleCompletionItem("@computed.sum", "import { sum } from '@ember/object/computed'", state),
      new EmberModuleCompletionItem("@computed.union", "import { union } from '@ember/object/computed'", state),
      new EmberModuleCompletionItem("@computed.uniq", "import { uniq } from '@ember/object/computed'", state),
      new EmberModuleCompletionItem("@computed.uniqBy", "import { uniqBy } from '@ember/object/computed'", state),

      new EmberModuleCompletionItem("@copy", "import { copy } from '@ember/object/internals'", state),
      new EmberModuleCompletionItem("@create", "import { create } from '@ember/polyfills'", state),
      new EmberModuleCompletionItem("@debug", "import { debug } from '@ember/debug'", state),
      new EmberModuleCompletionItem("@defineProperty", "import { defineProperty } from '@ember/object'", state),
      new EmberModuleCompletionItem("@deprecate", "import { deprecate } from '@ember/application/deprecations'", state),
      new EmberModuleCompletionItem("@deprecateFunc", "import { deprecateFunc } from '@ember/application/deprecations'", state),
      new EmberModuleCompletionItem("@expandProperties", "import { expandProperties } from '@ember/object/computed'", state),
      new EmberModuleCompletionItem("@import", "import { get } from '@ember/object'", state),
      new EmberModuleCompletionItem("@getEngineParent", "import { getEngineParent } from '@ember/engine'", state),
      new EmberModuleCompletionItem("@getOwner", "import { getOwner } from '@ember/application'", state),
      new EmberModuleCompletionItem("@getProperties", "import { getProperties } from '@ember/object'", state),
      new EmberModuleCompletionItem("@getWithDefault", "import { getWithDefault } from '@ember/object'", state),
      new EmberModuleCompletionItem("@guidFor", "import { guidFor } from '@ember/object/internals'", state),
      new EmberModuleCompletionItem("@inject.controller", "import { inject } from '@ember/controller'", state),
      new EmberModuleCompletionItem("@inject.service", "import { inject } from '@ember/service'", state),
      new EmberModuleCompletionItem("@inspect", "import { inspect } from '@ember/debug'", state),
      new EmberModuleCompletionItem("@instrument", "import { instrument } from '@ember/instrumentation'", state),
      new EmberModuleCompletionItem("@isArray", "import { isArray } from '@ember/array'", state),
      new EmberModuleCompletionItem("@isBlank", "import { isBlank } from '@ember/utils'", state),
      new EmberModuleCompletionItem("@isEmpty", "import { isEmpty } from '@ember/utils'", state),
      new EmberModuleCompletionItem("@isEqual", "import { isEqual } from '@ember/utils'", state),
      new EmberModuleCompletionItem("@isNone", "import { isNone } from '@ember/utils'", state),
      new EmberModuleCompletionItem("@isPresent", "import { isPresent } from '@ember/utils'", state),
      new EmberModuleCompletionItem("@keys", "import { keys } from '@ember/polyfills'", state),
      new EmberModuleCompletionItem("@makeArray", "import { makeArray } from '@ember/array'", state),
      new EmberModuleCompletionItem("@merge", "import { merge } from '@ember/polyfills'", state),
      new EmberModuleCompletionItem("@observer", "import { observer } from '@ember/object'", state),
      new EmberModuleCompletionItem("@on", "import { on } from '@ember/object/evented'", state),
      new EmberModuleCompletionItem("@onLoad", "import { onLoad } from '@ember/application'", state),
      new EmberModuleCompletionItem("@platform.hasPropertyAccessors", "import { hasPropertyAccessors } from '@ember/polyfills'", state),
      new EmberModuleCompletionItem("@removeListener", "import { removeListener } from '@ember/object/events'", state),
      new EmberModuleCompletionItem("@removeObserver", "import { removeObserver } from '@ember/object/observers'", state),
      new EmberModuleCompletionItem("@reset", "import { reset } from '@ember/instrumentation'", state),

      new EmberModuleCompletionItem("@run", "import { run } from '@ember/runloop'", state),
      new EmberModuleCompletionItem("@run.begin", "import { begin } from '@ember/runloop'", state),
      new EmberModuleCompletionItem("@run.bind", "import { bind } from '@ember/runloop'", state),
      new EmberModuleCompletionItem("@run.cancel", "import { cancel } from '@ember/runloop'", state),
      new EmberModuleCompletionItem("@run.debounce", "import { debounce } from '@ember/runloop'", state),
      new EmberModuleCompletionItem("@run.end", "import { end } from '@ember/runloop'", state),
      new EmberModuleCompletionItem("@run.join", "import { join } from '@ember/runloop'", state),
      new EmberModuleCompletionItem("@run.later", "import { later } from '@ember/runloop'", state),
      new EmberModuleCompletionItem("@run.next", "import { next } from '@ember/runloop'", state),
      new EmberModuleCompletionItem("@run.once", "import { once } from '@ember/runloop'", state),
      new EmberModuleCompletionItem("@run.schedule", "import { schedule } from '@ember/runloop'", state),
      new EmberModuleCompletionItem("@run.scheduleOnce", "import { scheduleOnce } from '@ember/runloop'", state),
      new EmberModuleCompletionItem("@run.throttle", "import { throttle } from '@ember/runloop'", state),

      new EmberModuleCompletionItem("@runInDebug", "import { runInDebug } from '@ember/debug'", state),
      new EmberModuleCompletionItem("@runLoadHooks", "import { runLoadHooks } from '@ember/application'", state),
      new EmberModuleCompletionItem("@sendEvent", "import { sendEvent } from '@ember/object/events'", state),
      new EmberModuleCompletionItem("@set", "import { set } from '@ember/object'", state),
      new EmberModuleCompletionItem("@setOwner", "import { setOwner } from '@ember/application'", state),
      new EmberModuleCompletionItem("@setProperties", "import { setProperties } from '@ember/object'", state),
      new EmberModuleCompletionItem("@subscribe", "import { subscribe } from '@ember/instrumentation'", state),
      new EmberModuleCompletionItem("@tryInvoke", "import { tryInvoke } from '@ember/utils'", state),
      new EmberModuleCompletionItem("@trySet", "import { trySet } from '@ember/object'", state),
      new EmberModuleCompletionItem("@typeOf", "import { typeOf } from '@ember/utils'", state),
      new EmberModuleCompletionItem("@unsubscribe", "import { unsubscribe } from '@ember/instrumentation'", state),
      new EmberModuleCompletionItem("@warn", "import { warn } from '@ember/debug'", state)
    ])
  }
}

export function activate(context: ExtensionContext): void {
  context.subscriptions.push(languages.registerCompletionItemProvider('javascript', new EmberModuleCompletionItemProvider(), '@'))
}
